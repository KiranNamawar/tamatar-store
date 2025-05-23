import { AppError, ErrorCode } from "./error";

export function getEnvVariable(key: string) {
	const value = process.env[key];
	if (!value) {
		throw new AppError(`Environment variable [${key}] is not set`, {
			code: ErrorCode.ENV_VARIABLE_NOT_SET,
		});
	}
	return value;
}
