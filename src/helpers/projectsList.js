import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";
import { v4 as uuidv4 } from 'uuid';
const projects = [
	{
		id: uuidv4(1),
		title: 'Погода',
		skills: 'Сделан на Django',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com/Badted11/weatherApp',
	},
	{
		id: uuidv4(2),
		title: 'TodoList',
		img: project02,
		imgBig: project02Big,
		skills: 'React, PHP, MySql',
		gitHubLink: 'https://github.com/Badted11/TodoFinal',
	},
	{
		id: uuidv4(3),
		title: 'Крестики Нолики',
		img: project03,
		imgBig: project03Big,
		skills: 'React , HTML',
		gitHubLink: 'https://github.com/Badted11/TodoFinal',
	},
	{
		id: uuidv4(4),
		title: 'Змейка',
		img: project04,
		imgBig: project04Big,
		skills: 'Python , HTML',
		gitHubLink: 'https://github.com/Badted11/Games-Python-TurtleS',
	},
	{
		id: uuidv4(5),
		title: 'Paralax',
		img: project05,
		imgBig: project05Big,
		skills: 'HTML, SCSS, JS',
		gitHubLink: 'https://github.com/Badted11?tab=repositories',
	},
	{
		id: uuidv4(6),
		title: '3D-Efect',
		img: project06,
		imgBig: project06Big,
		skills: 'HTML, SCSS, JS',
		gitHubLink: 'https://github.com/Badted11?tab=repositories',
	},
];

export {projects}