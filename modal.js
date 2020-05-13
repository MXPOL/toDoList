export class Modal {
    constructor(contentId){
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplate = document.getElementById('modal-template');
    }

    show(){
        this.modalElements = document.importNode(this.modalTemplate.content, true);
        this.modalElement = this.modalElements.querySelector('.modal');
        this.backdropElement = this.modalElements.querySelector('.backdrop');
        const contentElement = document.importNode(
            this.contentTemplateEl.content,
            true
        );

        this.modalElement.appendChild(contentElement);

        document.body.insertAdjacentElement('afterbegin',this.backdropElement);
        document.body.insertAdjacentElement('afterbegin',this.modalElement);
    }

    hide(){
        //this.modalElement.classList.remove('modal');
        //this.modalElement.classList.add('hideModal');
        document.body.removeChild(this.modalElement);
        document.body.removeChild(this.backdropElement);
    }
}