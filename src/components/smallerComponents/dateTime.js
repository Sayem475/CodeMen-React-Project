import React from 'react'

export default function DateTime({dateUpdated}) {
    const convertDate = () => {
        var currentdate = new Date(dateUpdated);
        let dt = currentdate.getDate() < 10 ? '0' + currentdate.getDate() : currentdate.getDate();
        let mon = (currentdate.getMonth() + 1) < 10 ? '0' + (
            currentdate.getMonth() + 1
        ) : (currentdate.getMonth() + 1);
        let yy = currentdate.getFullYear();
        let hr = currentdate.getHours();
        let mn = currentdate.getMinutes();
        let ap = hr >= 12 ? 'PM' : 'AM'
        // 12 hour format
        hr = hr > 12 ? hr - 12 : hr;
        // add 0 for single value
        hr = hr < 10 ? '0' + hr : hr;
        mn = mn < 10 ? '0' + mn : mn;
        var dateTime = dt + '/' + mon + '/' + yy + ' ' + hr + ':' + mn + ap;
        return dateTime;
    }
    return (
        <div>
            <small>Last Updated: {
                convertDate()
            } </small>
        </div>
    )
}
