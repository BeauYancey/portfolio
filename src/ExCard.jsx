function ExCard({ ex }) {
	return (
		<div className='ex-card'>
			<div className='ex-dates'>{ex.dates}</div>
			<div className='ex-info'>
				<div className="ex-role">{ex.role} - {ex.co}</div>
				<div className="ex-desc">{ex.desc}</div>
				<div className='ex-skills'>
					{ex.skills.map(skill => (
						<div className='skill' key={skill}>{skill}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ExCard