import React from 'react';
import ThingForm from './ThingForm';
import { connect } from 'react-redux';


const ThingDelete = ({ deleteThing })=> {
  return (
    <button onClick={  deleteThing }>x</button>
  );
};

const Things = ({ things })=> {
  return (
    <div>
      <h1>Things</h1>
      <ul>
        {
          things.map( thing => {
            return (
              <li key={ thing.id }>
                { thing.name } 
                <ThingForm />
                <ThingDelete />
              </li>
            );
          })
        }
      </ul>
     
    </div>
  );
};

const mapStateToProps = (state)=> {
  return {
    things: state.things
  };
};


const mapDispatchToProps = (dispatch)=> {
  return {
    deleteThing: async(user)=> {
      await axios.delete(`/api/things/${thing.id}`);
      dispatch({ type: 'DELETE_THING', thing });
    }
  };
}


export default connect(
  (state)=> {
    return {
      things: state.things
    }
  }
)(Things);