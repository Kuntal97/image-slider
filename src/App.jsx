import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
function App() {
	const [currentIndex, setCurrentIndex] = useState(0);

	function prevSlide() {
		if (currentIndex === 0) {
			setCurrentIndex(slides.length - 1);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	}

	function nextSlide() {
		if (currentIndex === slides.length - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	}

	function goToSlide(slideIndex) {
		setCurrentIndex(slideIndex);
	}

	const slides = [
		{
			url: "https://images.unsplash.com/photo-1606338267210-b1d31a41c3e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
		},
		{
			url: "https://images.unsplash.com/photo-1611651186486-415f04eb78e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
		},
		{
			url: "https://images.unsplash.com/photo-1707342227686-13ec983178d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
		},
		{
			url: "https://images.unsplash.com/photo-1659737419997-10be04c876c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
		},
		{
			url: "https://images.unsplash.com/photo-1501908734255-16579c18c25f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
		},
	];

	return (
		<div className="max-w-[600px] h-[480px] w-full m-auto py-16 px-4 relative group">
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
			<div
				onClick={prevSlide}
				className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactLeft size={20} />
			</div>
			<div
				onClick={nextSlide}
				className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactRight size={20} />
			</div>
			<div className="flex top-4 justify-center py-2">
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className="text-2xl cursor-pointer">
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
