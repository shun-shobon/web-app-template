import type { FC } from "react";

const App: FC = () => {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
			<h1 className="text-2xl font-bold">Hello, world!</h1>
			<button className="rounded-md bg-blue-500 px-4 py-2 text-white">
				Click me
			</button>
		</div>
	);
};

export default App;
