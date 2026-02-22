
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
                    <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                        <h2 className="text-xl font-bold text-red-500 mb-4">Something went wrong</h2>
                        <p className="text-zinc-400 mb-4">
                            The application encountered an error. Please try refreshing the page.
                        </p>
                        <pre className="bg-black p-4 rounded text-xs text-red-400 overflow-auto max-h-40">
                            {this.state.error?.message}
                        </pre>
                        <button
                            className="mt-4 w-full bg-white text-black font-medium py-2 px-4 rounded hover:bg-zinc-200 transition-colors"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
