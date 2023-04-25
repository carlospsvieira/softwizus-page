function Contact() {

  const animateTitle = (title) => {
    const letters = title.split("");

    return letters.map((letter, index) => (
      <span key={index}>
        <span
          onMouseEnter={(e) => {
            e.target.classList.add("jump");
            setTimeout(() => {
              e.target.classList.add("stop");
            }, 5000);
          }}
          style={{ whiteSpace: "pre" }}>
          {letter}
        </span>
      </span>
    ));
  };

  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h2 className='text-4xl text-center text-white mb-4'>
          {animateTitle("Send us a direct message!")}
        </h2>
        <form
          action='https://getform.io/f/2bce8a6b-4a81-44de-95ed-0d62adfea293'
          method='POST'
          encType='multipart/form-data'>
          <div className='flex flex-col gap-2 text-white'>
            <div className='flex gap-2 form-container'>
              <input
                type='text'
                name='name'
                className='uppercase p-3 border-2 rounded-lg border-gray-400 bg-transparent'
                placeholder='Name'
                required
              />
              <input
                type='text'
                name='phone'
                className='uppercase p-3 border-2 rounded-lg border-gray-400 bg-transparent'
                placeholder='Phone'
              />
            </div>
            <input
              type='email'
              name='email'
              className='uppercase w-full p-3 border-2 rounded-lg border-gray-400 bg-transparent'
              placeholder='Email'
              required
            />
            <input
              type='text'
              name='subject'
              className='uppercase w-full p-3 border-2 rounded-lg border-gray-400 bg-transparent'
              placeholder='Subject'
            />
            <textarea
              name='email-body'
              rows='5'
              className='w-full p-3 border-2 rounded-lg border-gray-400 bg-transparent'
              required></textarea>
            <div>
              <button
                type='submit'
                className='w-full py-3 bg-cyan-700 rounded-md text-white text-lg send-btn'>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
