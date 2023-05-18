import React from 'react';

const Loader = () => {
	return (
		<div className="loader-con">
			<div class="ui-loader loader-blk">
				<svg viewBox="22 22 44 44" class="multiColor-loader">
					<circle
						cx="44"
						cy="44"
						r="20.2"
						fill="none"
						stroke-width="3.6"
						class="loader-circle loader-circle-animation"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Loader;
