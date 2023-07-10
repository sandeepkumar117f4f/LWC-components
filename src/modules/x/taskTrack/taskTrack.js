import { LightningElement } from 'lwc';

export default class extends LightningElement {
  
  constructor() {

    super();
    const styles = document.createElement('link');
    styles.href = '/resources/css/main.css';
    styles.rel = 'stylesheet';
    this.template.appendChild(styles);
}
}
