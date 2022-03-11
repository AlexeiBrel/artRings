const $ = {};
function _createModal(options) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.insertAdjacentHTML(
        "afterbegin",
        ` <div class="modal-overlay">
               <div class="modal-window">
                   <div class="modal-header">
                       <span class="modal-title">Modal title</span>
                       <span class="modal-close">X</span>
                   </div>
                   <div class="modal-body">
                       <p>Lorem ipsum dolor sit.</p>
                   </div>
                   <div class="modal-footer">
                       <button class="btn">Да</button>
                       <button class="btn">Отмена</button>
                   </div>
               </div>
        </div>        
    `
    );
    document.body.appendChild(modal);
    return modal;
}

$.modal = function (options) {
    const speed = 200;
    const $modal = _createModal(options);
    let closing = false;

    return {
        open() {
            !closing && $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, speed);
        },
        destroy() { },
    };
};


const modal = $.modal();