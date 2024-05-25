import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Project = ({ title, img, index, description }) => {
	return (
		<div className="project">
			<Link to={`/edit/${index}`}><Button variant="primary">Изменить</Button></Link>
			<Link to={`/delete/${index}`}><Button variant="danger">Удалить</Button></Link>
			<img src={img} alt={title} className="project__img" />
			<h3 className="project__title">{title}</h3>
			<p style={{ textAlign: "center" }}>
                            {description}
			</p>
		</div>
	);
};

export default Project;
