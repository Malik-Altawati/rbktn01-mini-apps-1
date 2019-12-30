<form onSubmit={this.handleSubmit}>
    <label>
        username:
<input type="text" username={this.state.username} onChange={this.handleUsername} />
    </label>
    <label>
        email:
<input type="text" email={this.state.email} onChange={this.handleEmail} />
    </label>
    <input type="submit" value="Submit" />
</form>