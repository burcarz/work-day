$(document).ready(function(){

    var tasks = []
    var savedTasks = []
    const m = moment()
    $(currentDay).text(m.format('LL'))


    // compares box time to current time and assigns class (changes styling)
    var currentHour = (m.hour())
    $('textarea').each(function () {

        if(this.dataset.time > currentHour) {
            $(this).addClass('future')
        } else if (this.dataset.time < currentHour) {
            $(this).addClass('past')
        } else {
            $(this).addClass('present')
        }
    })

    $('textarea').each(function() {
        let tasks = JSON.parse(localStorage.getItem("tasks"))
        let loadedTaskId = $(this).attr('id')
        
        $('textarea').filter($(this).attr('id'))
    })

    $('.saveBtn').click(function (e) {
        e.preventDefault();
        $('textarea').each(function () {
        var task = {
            taskName: $(this).val(),
            id: $(this).attr('id')
        }
        tasks.push(task)

        localStorage.setItem('tasks', JSON.stringify(tasks))
        })
    });
})
//save tasks
// on save button click, identify what text is in the box, save that as an object to an array in local storage


/* 
WHEN I refresh the page
THEN the saved events persist
(load saved objs)
*/