import React from 'react'
import moment from 'moment';

// this.state = {startDate:1519026163000, timeEnd:1519126755000} // example

// const startDate = moment(this.state.startDate);
// const timeEnd = moment(this.state.timeEnd);
// const diff = timeEnd.diff(startDate);
// const diffDuration = moment.duration(diff);



const startDate = 1519026163000
const timeEnd = Date.now()
// const diff = timeEnd.diff(startDate);
// const diffDuration = moment.duration(diff);

// console.log("Total Duration in millis:", diffDuration.asMilliseconds());
// console.log("Days:", diffDuration.days());
// console.log("Hours:", diffDuration.hours());
// console.log("Minutes:", diffDuration.minutes());
// console.log("Seconds:", diffDuration.seconds());


// console.log('time', moment(date).format());
// console.log('end', date);

const TogetherSince = () => {
    return (
        <div class="wd_timer_wrapper">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="wd_center_words">
                            <span class="pre-title">together since</span>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        {/* <p id="dateWedding" style="display: none;">Fri Feb 14 2020 13:37:00 +00:00</p>  */}
                        <p id="dateWedding" style={{display:'none'}}>Fri Feb 14 2020 08:07:00 +00:00</p>
                        <div id="clockdiv" class="d-flex align-items-center justify-content-center">


                            <div class="d-flex justify-content-center flex-column" style={{display: "flex !important"}} ><span class="years"></span><div class="smalltext">Years</div></div>
                            <div class="d-flex justify-content-center flex-column" style={{display: "flex !important"}} ><span class="months"></span><div class="smalltext">Months</div></div>
                            <div class="d-flex justify-content-center flex-column" style={{display: "flex !important"}} ><span class="days"></span><div class="smalltext">Days</div></div>
                            <div class="d-flex justify-content-center flex-column" style={{display: "flex !important"}} ><span class="hours"></span><div class="smalltext">Hours</div></div>
                            <div class="d-flex justify-content-center flex-column" style={{display: "none !important"}} ><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                            <div class="d-flex justify-content-center flex-column" style={{display: "none !important"}} ><span class="seconds"></span><div class="smalltext">Seconds</div></div>                      
                            
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TogetherSince