import { getSessionById } from "@/lib/db";
import builder from "@/lib/graphql/pothos";
import { ACCESS_TOKEN_EXPIRY_IN_MINUTES } from "@/lib/types/constants";
import { AppError, ErrorCode } from "@/lib/utils/error";
import { createToken } from "@/lib/utils/jwt";

builder.mutationField("refresh", (t) =>
	t.field({
		type: "String",
		resolve: async (_, args, context: any) => {
			const { refreshToken } = context;

			// Check if the user is authenticated
			if (!refreshToken) {
				throw new AppError("User not authenticated", {
					code: ErrorCode.UNAUTHORIZED,
				});
			}

			// Check if the refresh token is valid
			const session = await getSessionById(refreshToken);
			if (!session.success) {
				throw new AppError("Invalid refresh token", {
					code: ErrorCode.UNAUTHORIZED,
				});
			}

			return await createToken({
				payload: {
					sub: session.data.userId,
				},
				expiresInMinutes: ACCESS_TOKEN_EXPIRY_IN_MINUTES,
			});
		},
	}),
);
