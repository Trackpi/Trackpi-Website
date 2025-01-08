
        {/* Business Card Section */}
        <div className="col-md-6">
          <h4>Business Card</h4>
          <div
            className="border border-secondary rounded p-4 text-center position-relative"
            style={{
              width: "100%",
              height: "200px",
              overflow: "hidden",
            }}
          >
            {businessCard ? (
              <img
                src={URL.createObjectURL(businessCard)}
                alt="Uploaded Business Card"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <p>Upload the file</p>
            )}
            <button
              onClick={() => businessCardInputRef.current.click()}
              className="btn btn-link"
              aria-label="Upload Business Card"
            >
              <i
                className="fa-solid fa-arrow-up-from-bracket"
                style={{ fontSize: "50px", color: "black" }}
              />
            </button>
          </div>
          <input
            type="file"
            ref={businessCardInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleBusinessCardFileChange}
          />
        </div>


const [businessCard, setBusinessCard] = useState(null);
const businessCardInputRef = useRef(null);

const handleBusinessCardFileChange = (e) => {
    setBusinessCard(e.target.files[0]);
  };