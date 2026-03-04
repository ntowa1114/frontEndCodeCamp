const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [num, setNum] = useState();
  const [dp,setDp] =useState();
  const [check,setCheck] = useState();
  const [submitted, setSubmitted] =useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }
  return(
    <form onSubmit={handleSubmit}>
      <h1>Event RSVP Form</h1>
      <label>
      Name:
      <input
      type="text"
      required="true"
      value={name}
      onChange={e => setName(e.target.value)}
      />
      
      </label>
      <label>
        Email:
        <input
        type="email"
        required="true"
        onChange={e => setEmail(e.target.value)}
        />
      </label>
      <p>Number of Attendees:</p>
      <input
        type="number"
        required="true"
        min="1"
        onChange={e => setNum(e.target.value)}
      />
      <p>Dietary Preferences:</p>
      <input 
      type="text"
      onChange={e => setDp(e.target.value)}
       />
      <p>Bringing additional guests?</p>
      <input type="checkbox" 
      onChange={e => setCheck(e.target.value)}
      />
      <button
        type="submit"
      >
        Submit RSVP
      </button>
      {!submitted ?
      ("")
      :
      <div>
      <h2>RSVP Submitted!</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Number of attendees: {num}</p>
      <p>Dietary preferences: {dp}</p>
      <p>Bringing additional guests: {check}</p>
      
      </div>
      }
  </form>
  
  )
  
};