export default function ContactMe() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name?</span>
  </label>
  <input type="text" placeholder="Insert your name here" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text">Email?</span>
  </label>
  <input type="text" placeholder="Insert your email here" class="input input-bordered w-full max-w-xs" />
  <div className="form-control">
  <label className="label">
    <span className="label-text">Your message</span>
  </label>
  <textarea className="textarea textarea-bordered h-40" placeholder="Insert creative message here"></textarea>
</div>
      </div>
      <button className="btn btn-primary">Send</button>
    </div>
  )
}