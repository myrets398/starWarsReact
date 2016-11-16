var StarWarsPage = React.createClass({
            render: function() {
                var personNodes = this.props.data.map(function(person) {
                    return (<Person
                  name={person.name}
                  height={person.height}
                  mass={person.mass}
                  haircolor={person.hair_color}
                  skincolor={person.skin_color}
                  eyecolor={person.eye_color}
                  birthyear={person.birth_year}
                  gender={person.gender}
                />
              );
            });
            return (<div>
              {personNodes}
                          </div>
                    );
                  }
                });

var StarWarsPage = React.createClass({
    loadStarWarsPage: function() {
        $.ajax({
            method: "GET",
            url: "http://swapi.co/api/people",
            success: function(data) {
                console.log(data);
                this.setState({
              data: response.results,

                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(status, err.toString());
            }.bind(this)
    });
  },
    componentDidMount:
    function() {this.loadPeopleFromServer();},
    // getInitialState:function(){

    class Person extends React.Component
    {render(){return(this.props.varname);}}

    getInitialState: function() {
        return {
            data: []
        };
    },
    render: function(){
        return (
          <div>
                <button onClick={this.loadPeopleFromServer}>Name</button>
                <StarWarsPage data ={this.state.list}/>
            </div>
        );
    }
});

ReactDOM.render(<StarWarsPage/>,
  document.getElementById('X'));
