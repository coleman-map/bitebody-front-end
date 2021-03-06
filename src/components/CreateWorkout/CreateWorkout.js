import React, { Component } from 'react'

class WorkoutPlans extends Component {
     
    render() {
      return (
        <div id="landing">
        <div className="container">

        <div className="row">
            <div className="col-sm-1">
            </div>

            <div className="col-sm-10">
                <div className="card"  style={{width: '100%'}}>
                <div className="card-header">
                    <h3 style={{fontSize: '1.2em'}}>Workout Creator</h3>
                </div>
                <div className="card-body">

                

                    <form onSubmit={this.onSubmit}>

                    <center>
                    <div className="form-group">

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Workout Name</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter the name of your workouts"/>
                      </div>
                    </div>

                    <br/>
                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Body Part</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="Please enter Body Part to workout">
                          <option>Abs</option>
                          <option>Biceps</option>
                          <option>Triceps</option>
                          <option>Calves</option>
                          <option>Glutes</option>
                          <option>Upper Back</option>
                          <option>Lower Back</option>
                          <option>Chest</option>
                          <option>Forearm</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Duration</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>10-20 min</option>
                          <option>20 - 30 min</option>
                          <option>30 - 45 min</option>
                        </select>
                      </div>
                    </div>

                    


                    <br/>

                    

                    <br/>

                    </div>
                      <button type="submit" className="btn btn-primary"> <span role="img" aria-label="muscle">💪🏽</span> Generate Workout!</button>
                    </center>
               
                    </form>

                </div>
                </div>
            </div>

            <div className="col-sm-1">
            
            </div>

          </div>

        </div>
      </div>
      )
    }
  }
  
  export default WorkoutPlans