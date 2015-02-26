var SetIntervalMixin = {
    componentWillMount: function () {
        this.intervals = [];
    },
    setInterval: function () {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function () {
        this.intervals.map(clearInterval);
    }
}

var TickTock = React.createClass({
    mixins: [SetIntervalMixin],
    getInitialState: function () {
        return {
            seconds: 0
        }
    },
    componentDidMount: function () {
        var t = this
        this.setInterval(this.tick, 1000); // call a method on the mixin
        // setTimeout(function () {
            // TODO 销毁compontent?
        // }, 10000);
    },
    tick: function () {
        this.setState({
            seconds: this.state.seconds + 1
        });
    },
    render: function () {
        return (
            <p>React has been running for {this.state.seconds} seconds.</p>
        )
    }
});

React.render(
    <TickTock />, 
    document.getElementById('example')
)




