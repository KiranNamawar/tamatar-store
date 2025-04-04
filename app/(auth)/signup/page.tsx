import GoogleSignupButton from '@/components/auth/google-signup-button';
import SignUpForm from '@/components/auth/signup-form';
import Link from 'next/link';

export default function SignupPage() {
    return (
        <main className="w-11/12 md:w-1/2 lg:w-1/3">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <p className="mb-4 text-sm text-gray-500">
                Create an account to get started.
            </p>
            <SignUpForm />
            <p className="m-2 text-sm text-gray-500">
                Already have an account? {' '}
                <Link href="/login" className="link">
                    Login
                </Link>
            </p>
            <p className="divider mb-4 text-sm text-gray-500">or</p>
            <GoogleSignupButton />
        </main>
    );
}
