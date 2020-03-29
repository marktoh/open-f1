import React from 'react';
import './index.scss';

type Props = {
	resource: [{
		schema: {
			fields: [],
		},
		data: [],
	}],
	title: string,
	onRowClick: () => mixed,
}
class Table extends React.Component<Props> {
	enableZebraStriping = (rows) => {
		const SMALL_DATASET_LIMIT = 10;
		const enable = rows.length > SMALL_DATASET_LIMIT;
		return enable;
	}

	createClassNames = () => {
		const { resource } = this.props;
		const { data } = resource;
		const classNames = [];
		if (this.enableZebraStriping(data)) classNames.push('zebra-stripe');
		const className = classNames.join(' ');
		return className;
	}

	renderBody = (data) => {
		// TODO: Get cell headers. Render accordingly
		return (
			<tbody>
				{data.map((row, i)=> (
					<tr key={i} onClick={() => this.props.onRowClick(row.round)}>
						<td>{row.round}</td>
						<td>{row.raceName}</td>
						<td>{row.circuitName}</td>
						<td>{row.country}</td>
					</tr>
				))}
			</tbody>
		)
	}

	renderHead = (fields) => {
		return (
			<thead>
				<tr>
					{fields.map(field =>
						<th key={field.name}>{field.name}</th>
					)}
				</tr>
			</thead>
		)
	}

	render() {
		const { resource, title } = this.props;
		const { data } = resource;
		const { fields } = resource.schema;

		return (
			<div className="Table">
				{title && (
					<div className="Table-Header">
						<div className="Table-Header-Title">
							{title}
						</div>
					</div>
				)}
				<div className="Table-Body">
					<table className={this.createClassNames()}>
						{this.renderHead(fields)}
						{this.renderBody(data)}
					</table>
				</div>
		    </div>
		)
	}
}

export default Table;