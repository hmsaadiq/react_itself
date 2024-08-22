function form(){
    return (
        <div className="form" style={{width: '474px' , height: '920px', backgroundColor: '#3C3D37'}}>
            <h2>Form</h2>
            <div style={{}}>
                <label>Name:</label>
                <input type="text" name="Name"/><br />
                <label>Number:</label>
                <input type="number" name="phonenumber"/> <br />
                <label>Email:</label>
                <input type="text" name="email"/><br />
                <label>Address:</label>
                <input type="text" name="Address"/><br />
                <label>Notes (optional ):</label>
                <input type="text" name="Note"/><br />
                

            </div>
        </div>
    );
}
export default form;