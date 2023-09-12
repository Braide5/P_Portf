// stylesheet
import "./style/GetInTouch.scss";

// react icon
import { AiOutlineSend } from "react-icons/ai";

const GetInTouch = () => {
  return (
    <section className="message_me">
        <div className="message_header">
            <span>Get in Touch</span>
            <h3>Message Me</h3>
        </div>
        <div className="message_box">
        <input type="text" placeholder="Type your Message" />
        <button><AiOutlineSend className="send_icon"/></button>
        </div>
    </section>
  )
}

export default GetInTouch