window.jQuery = function (nodeOrSelector) {
    let nodes = {}

    if (typeof nodeOrSelector === 'string') {                                   //类型检测
        let temp = document.querySelectorAll(nodeOrSelector)                    //通过临时变量去除多余原型链属性
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    } else if (nodeOrSelector instanceof Node) {
        nodes = {
            0: nodeOrSelector,
            length: 1
        }
    }

    nodes.addClass = function (classes) {
        classes.forEach((value) => {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(value)
            }
        })
    }

    nodes.removeClass = function (classes) {
        classes.forEach((value) => {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.remove(value)
            }
        })
    }

    nodes.text = function (text) {
        if (text === undefined) {                               //不给参数说明想要获取参数
            var texts = []
            for (let i = 0; i < nodes.length; i++) {
                texts.push(nodes[i].textContent)
            }
            return texts
        } else {                                                //否则传入参数设置文本内容
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text
            }
        }
    }

    return nodes
}

window.$ = jQuery
var $div = $('div')

var oBtn1 = document.querySelector('#btn1')
var oBtn2 = document.querySelector('#btn2')

oBtn1.onclick = function () {
    for (let i = 0; i < $div.length; i++) {
        if ($div[i].className === "") {
            $div.addClass(['changeAfter'])
        } else {
            $div.removeClass(['changeAfter'])
        }
    }
}
oBtn2.onclick = function () {
    $div.text('hi')
}
