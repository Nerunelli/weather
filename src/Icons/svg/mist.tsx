import { IconProps } from '../types';

const Icon_mist: React.FC<IconProps> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="55"
		height="45"
		viewBox="0 0 55 45"
		{...props}
	>
		<g
			fill="#000000"
			fillRule="evenodd"
			transform="translate(0 -2)"
			opacity=".4"
		>
			<rect width="55" height="55" fill="none" />
			<path
				fill="none"
				stroke="#C9C9C9"
				strokeWidth="1.4"
				d="M6.06 29.503L45.192 29.503M11.689 39.708L50.821 39.708M4.561 24.401L43.519 24.401M9.762 34.606L48.72 34.606M6.06 9.093L45.192 9.093M11.689 19.298L50.821 19.298M4.561 3.99L43.519 3.99M10.29 14.16L49.248 14.16M4.561 45.097L43.519 45.097"
			/>
		</g>
	</svg>
);

export default Icon_mist;
