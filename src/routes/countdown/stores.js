import { writable } from 'svelte/store';

function getTime() {
    const date_future = new Date(2023, 0, 1);
    const date_now = new Date();

    let seconds = Math.floor((date_future - (date_now))/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);
    
    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days,
    };
}

export function updateTime() {
    let t = getTime();
    time.set({
        seconds: t.seconds,
        minutes: t.minutes,
        hours: t.hours,
        days: t.days,
    });
}

export const time = writable(getTime());