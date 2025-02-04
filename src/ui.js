console.log("bundle successful. Hello from ui.js");
export default class ChatUI {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = "";
  }
  render(data) {
    const when = dateFns.distanceInWordsToNow(data.created_at.timestampValue, {
      addSuffix: true,
    });
    const html = `
    <li class ="list-group-item">
        <span class="username">${data.user_name.stringValue}:</span>
        <span class="message">${data.message.stringValue}</span>
        <div class="time">${when}</div>
    </li>
    `;
    this.list.innerHTML += html;
  }
}
