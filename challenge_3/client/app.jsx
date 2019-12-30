class Pro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zipcode: '',
            creditcard: '',
            expirydate: '',
            cvv: '',
            billingaddress: ''
        };
    }
    /////////////////////////////////////////////////////// handlerchange

    handlechangeFORM(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    ///////////////////////////////////////////////////////////// handle submit
    handlesubmitform(event) {
        axios.post('/user', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handledefault(event) {
        event.preventDefault();
    }

    checkout() {
        return (
            <button id="btn">checkout</button>
        )
    }

    form1() {
        const { username, email, password } = this.state;
        return (
            <div id="div1" hidden>
                <form onSubmit={this.handledefault.bind(this)}>
                    username:
        <input type="text" id="username" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> email:
        <input type="text" id="email" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> password:
        <input type="text" id="password" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br>
                    <input id="form1btn" type="submit" value="NEXT" />
                </form>
            </div>)
    }

    form2() {
        const { line1, line2, city, state, zipcode } = this.state;
        return (
            <div id="div2" hidden>
                <form onSubmit={this.handledefault.bind(this)}>
                    line1:
        <input type="text" id="line1" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> line2:
        <input type="text" id="line2" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> city:
        <input type="text" id="city" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> state:
        <input type="text" id="state" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> zipcode:
        <input type="text" id="zipcode" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br>
                    <input id="form2btn" type="submit" value="NEXT" />
                </form>
            </div>)
    }

    form3() {
        const { creditcard, expirydate, ccv, billingaddress } = this.state;
        return (
            <div id="div3" hidden>
                <form onSubmit={this.handlesubmitform.bind(this)}>
                    creditcard:
        <input type="text" id="creditcard" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> expirydate:
        <input type="text" id="expirydate" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> cvv:
        <input type="text" id="cvv" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br> billingaddress:
        <input type="text" id="billingaddress" onChange={this.handlechangeFORM.bind(this)} />
                    <br></br>
                    <input id="form3btn" type="submit" value="Purchase" />
                </form>
            </div>)
    }

    render() {
        return (
            <center>
                {this.checkout()} {this.form1()} {this.form2()}  {this.form3()}
            </center >
        )
    }
}

$(document).ready(function () {
    $("#btn").on('click', function () {
        $('#btn').hide()
        $('#div1').show()
    })
    $("#form1btn").on('click', function () {
        $('#div1').hide()
        $('#div2').show()
    })
    $("#form1btn").on('click', function () {
        $('#div1').hide()
        $('#div2').show()
    })
    $("#form2btn").on('click', function () {
        $('#div2').hide()
        $('#div3').show()
    })
    $("#form3btn").on('click', function () {
        $('#div3').hide()
        alert("CHECK DATABASE")
    })
})

ReactDOM.render(<Pro />, document.getElementById("app"))
