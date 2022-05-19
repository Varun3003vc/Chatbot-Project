class Chatbox {
    constructor(){
        this.args ={
            openButtons: document.querySelector(selectors:'.chatbox__button'),
            Chatbox: document.querySelector(selectors:' .chatbox__support'),
        }
            sendButton: document.querySelector(selector:' .send__button')
        
        this.stat =false;
         this.messages = [];
    }


    dislpay() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener(type:'click', listener:() => this.toggleState(chatBox))

        openButton.addEventListener(type:'click',  listener:() => this.onSendButton(chatBox))
        const mode = chatbox.querySelector(selctors:'input');
        node.addEventListener(type:"keyup", listener:({key:string}) => {
            if (key === "Enter"){
                this.onSendButton(chatbox)
            }
        })
    }


}