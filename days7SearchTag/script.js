var ul = document.querySelector('ul')
var input = document.querySelector('.content input')
var tags = ['nodejs', 'css', 'html']


function showTag() {
    ul.innerHTML = ''
    tags.forEach((tag, index) => {
        let litag = `<li>
                    ${tag}
                    <i class='bx bx-x' onclick='removeTag(this, ${index})'></i>
                    </li>`
        ul.innerHTML += litag
    })
    ul.appendChild(input)
    input.focus()
}
showTag()

function removeTag(element, index) {
    tags.splice(index, 1)
    // element.parentElement.remove()
    // input.focus()
    showTag()
}
function addTag(e){
    if(e.key == 'Enter'){
        let tag = e.target.value.trim()
        if(tag != '' && !tags.includes(tag)){
            tags.push(tag)
            showTag()
        }
        input.value = ''
    }
}
input.addEventListener('keydown', addTag)
var removeAllbtn = document.querySelector('.btn-removeAll')
    removeAllbtn.addEventListener('click', function(){
        tags = []
        showTag()
    })