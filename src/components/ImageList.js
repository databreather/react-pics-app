import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
	images = images.map((image) => <ImageCard key={image.id} image={image} />);

	return images.length > 0 ? (
		<div className='image-list'>{images}</div>
	) : (
		<div className='tet'>No Images to Display.</div>
	);
};

export default ImageList;
