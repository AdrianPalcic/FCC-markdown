
    function Paper1({value, onChange}) {
        return (
            <div className="paper paper1">
                <h5>Editor</h5>
                 <textarea type="text" name='input' id="editor" value={value} onChange={onChange}></textarea>
            </div>
        )
    }

    export default Paper1;