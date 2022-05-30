export default class Class {

    constructor(id, dept, course) {
        this.id     = id;
        this.dept   = dept;
        this.course = course;
    }

    setInstructor(instructor) {
        this.instructor = instructor;
    }

    setMeetingTime(meetingTime) {
        this.meetingTime = meetingTime;
    }

    setRoom(room) {
        this.room = room;
    }

    getID() {
        return this.id;
    }

    getDept() {
        return this.dept;
    }

    getCourse() {
        return this.course;
    }

    getInstructor() {
        return this.instructor;
    }

    getMeetingTime() {
        return this.meetingTime;
    }

    getRoom() {
        return this.room;
    }
}