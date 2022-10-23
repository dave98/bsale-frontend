export function renderCategory(name, dataValue, active = false){
    return `
        <div class="buttons${active ? " active" : "" }" data-filter="${dataValue}">${name}</div>
    `
}