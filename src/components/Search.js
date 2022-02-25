

function Search() {
    return ( 
        <div className="form-container Search">
            <label for="exampleDataList" class="form-label">Datalist example</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
            <datalist id="datalistOptions">
                <option value="Watch"/>
                <option value="Green Band"/>
                <option value="Controller"/>
                <option value="Yellow Band"/>
                <option value="Phone"/>
                <option value="T-Shirt"/>
            </datalist>
        </div>
     );
}

export default Search;