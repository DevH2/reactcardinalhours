import React, { Component, useState } from 'react'
import { Snackbar, SnackbarContent, withStyles } from '@material-ui/core'
import DateTimePicker from 'react-datetime-picker';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const styles = theme => ({
    snackBar: {
        marginTop: '10%',
    }
})
toast.configure()
function AddSession() {
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [passwordValue, setPasswordValue] = useState("");

    const sucess = () => {
        toast.success("Successfully added session!", {
            position: toast.POSITION.TOP_CENTER
          });
    }

    const generalError = () => {
        toast.error("Error occurred, please check inputs.", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    const timeError = () => {
        toast.error("Please make sure that start and end time are valid. End time must come after start time.", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    const passwordError = () => {
        toast.error("Password input cannot be empty. Please try again.", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    async function handleAddSession(userPassword, startTime, endTime) {
        if (startTime >= endTime || startTime == null || endTime == null) {
            timeError();
            return;
        }
        if (userPassword.length == 0) {
            passwordError();
            return;
        }

        let utcStartTime = startTime.toUTCString();
        let utcEndTime = endTime.toUTCString();
        fetch('https://hours.team4159.org/users/addsession', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password: userPassword, startTime: utcStartTime, endTime: utcEndTime})
        }).then((response) => {
            if (response.ok) {
                sucess();
                clearInput();
            } else {
                generalError();
            }
        }).catch(err => {
            console.log(err);
            generalError();
        })
    }
    
    let handleUserInput = event => {
        setPasswordValue(event.target.value);
    }
    function clearInput() {
        setPasswordValue("");
        setEndTime(new Date());
        setStartTime(new Date());
    }

    let handleUserKeypress = event => {
        if (event.key === 'Enter') {
            handleAddSession(passwordValue, startTime, endTime);
        }
    }

    return (
        <div className={"add-session-container"}>
            <div>Enter Password:</div>
            <input type={"password"} className={"input"} value={passwordValue} onChange={handleUserInput} onKeyPress={handleUserKeypress} />
            <div className={"time-text"}>Start Time: </div>
            <DateTimePicker
                className={"date-time-picker"}
                onChange={setStartTime}
                value={startTime}
            />
            <div className={"time-text"}>End Time: </div>
            <DateTimePicker
                className={"date-time-picker"}
                onChange={setEndTime}
                value={endTime}
            />
            <button className={"buttons"} onClick={() => { handleAddSession(passwordValue, startTime, endTime) }}>Add Session</button>
        </div>
    )
}

export default withStyles(styles)(AddSession)
