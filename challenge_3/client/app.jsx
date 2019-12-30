
class Pro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmitform = this.handlesubmitform.bind(this);

    }
    /////////////////////////////////////////////////////// handlerchange

    handlechange(event) {
        this.setState({

        });
    }

    ///////////////////////////////////////////////////////////// handle submit
    handlesubmitform(event) {
        alert('A name was submitted: ' + this.state.username + "--" + this.state.email + "--" + this.state.password);
        event.preventDefault();
    }

    form1() {
        return (
            <div>
                <form onSubmit={this.handlesubmitform}>
                    username:
        <input type="text" username={this.state.username} onChange={this.handlechange} />
                    <br></br> email:
        <input type="text" email={this.state.email} onChange={this.handlechange} />
                    <br></br> password:
        <input type="text" password={this.state.password} onChange={this.handlechange} />
                    <br></br>
                    <input type="submit" value="NEXT" />
                </form>
            </div>)
    }

    // form2() {
    //     return (
    //         <div>
    //             <form onSubmit={this.handlesubmitform2}>
    //                 line1:
    //     <input type="text" line1={this.state.line1} onChange={this.handleline1} />
    //                 <br></br> line2:
    //     <input type="text" line2={this.state.line2} onChange={this.handleline2} />
    //                 <br></br> city:
    //     <input type="text" city={this.state.city} onChange={this.handlecity} />
    //                 <br></br> state:
    //     <input type="text" state={this.state.state} onChange={this.handlestate} />
    //                 <br></br> zipcode:
    //     <input type="text" zipcode={this.state.zipcode} onChange={this.handlezipcode} />
    //                 <br></br>

    //                 <input type="submit" value="NEXT" />
    //             </form>
    //         </div>)
    // }

    // form3() {
    //     return (
    //         <div>
    //             <form onSubmit={this.handlesubmitform3}>
    //                 creditcard:
    //     <input type="text" creditcard={this.state.creditcard} onChange={this.handlecreditcard} />
    //                 <br></br> expirydate:
    //     <input type="text" expirydate={this.state.expirydate} onChange={this.handleexpirydate} />
    //                 <br></br> cvv:
    //     <input type="text" cvv={this.state.cvv} onChange={this.handlecvv} />
    //                 <br></br> billingaddress:
    //     <input type="text" billingaddress={this.state.billingaddress} onChange={this.handlebillingaddress} />
    //                 <br></br>
    //                 <input type="submit" value="Purchase" />
    //             </form>
    //         </div>)
    // }

    render() {
        return (
            <center>
                {this.form1()}
            </center >
        )
    }
}

ReactDOM.render(<Pro />, document.getElementById("app"))
