import React, {
	Component
} from 'react';



export default class App extends Component {
	state = {
		test: '123'
	}

	componentWillMount() {
		this.state.test = 456;
		console.log(this.state.test + '^ ^ ^ ^ ^')
	}
	componentDidMount() {
		this.state.test = 789;
		console.log(this.state.test + '****')
	}

	shouldComponentUpdate() {

		console.log(this.state.test + '###');
		return true;
	}
	componentWillUpdate() {
		console.log(this.state.test + '&&&&')
	}

	componentDidUpdate() {
		console.log(this.state.test + '%%%%%')
	}


	render() {
		console.log(this.state.test)
		return (<div>
			<p>{this.state.test}</p> <
			button onClick = {
				() => {this.state.test = 222;}
			} > 123 < /button>
			</div>);
	}
}