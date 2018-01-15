import React, { Component } from 'react';

const renderActivity = (collection) => {
	const activities = collection.map((item, index) =>
		<div className="activity" key={index}>
			<i className={item.className} aria-hidden="true"></i>
			<p style={{marginLeft: '.3em'}}>{item.activityCount}</p>
		</div>
	)
	return (
  	<div className="activity_container">{activities}</div>
  )
}

const Card = ({ item }) => {
	const { name,
					description,
          html_url,
          stargazers_count,
          forks_count,
          open_issues_count,
          size } = item;

  const icons = [
		{className: "fa fa-star", activityCount: stargazers_count },
    {className: "fa fa-code-fork", activityCount: forks_count },
    {className: "fa fa-exclamation-circle", activityCount: open_issues_count }
  ];

  return (
		<div className="card_section" >
			<div className="card_section_header">
				<div style={{display: 'flex', flexDirection: 'row'}}>
					<a href={html_url}>
						<h2>{name}</h2>
					</a>
					<p className="sup_text">{size} KB</p>
				</div>
				{renderActivity(icons)}
			</div>
			<div style={{textAlign: 'left', maxWidth: '50%'}}>
				<p style={{marginTop: 0}}>
					{description || "No description available."}
				</p>
			</div>
		</div>
	)

}

export default Card;
