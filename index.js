// counter app
function init(){
    counts_str = localStorage.getItem("count")
    count = counts_str ? parse_latest_count() :  0
    display()
}
function increment(){
    count++
    display()
}
function display(){
    document.getElementById("count-el").innerText = count
    document.getElementById("count-past").innerText = counts_str
}
function save(){
    counts_str = counts_str? `${counts_str} - ${count}` : `${count}`
    localStorage.setItem("count", counts_str)
    display()
}
function clr(){
    localStorage.removeItem("count")
    counts_str = ""
    count = 0
    display()
}
function parse_latest_count(){
    count_arr = counts_str.split(" - ")
    return count_arr[count_arr.length - 1]
}
