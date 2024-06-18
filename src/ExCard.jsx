function ExCard({ ex }) {
	return (
		<div className='ex-card' style={{backgroundColor:'#DFE6F560', display:'flex', padding: '2em', borderRadius: '2em'}}>
			<div style={{width: '20%'}}>{ex.dates}</div>
			<div style={{display: 'flex', flexDirection:'column', width: '80%', gap: '1em'}}>
				<div>{ex.role} - {ex.co}</div>
				<div>{ex.desc}</div>
				<div style={{display: 'flex', flexWrap: 'wrap', gap: '1em'}}>
					{ex.skills.map(skill => (
						<div key={skill} style={{backgroundColor:'#8DA0D160', padding: '.25em .5em', borderRadius: '.5em'}}>{skill}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ExCard