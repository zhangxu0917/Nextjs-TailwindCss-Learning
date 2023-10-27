const ExamplePage = () => {
  return (
    <div className="h-screen bg-white">
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
      <a href="#">This is an anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">This is a button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">This is a button</button>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input disabled type="text" placeholder="e-mail" />
      </div>
      <div>
        <input type="date" />
      </div>
      <div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Checkbox</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>

      <div className="Select">
        <div>My Selected Option</div>
        <div>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      </div>
      <h1>This is another title</h1>
      <h2>This is a subtitle</h2>
    </div>
  );
};

export default ExamplePage;
