export default function Container({ children }) {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    );
} 