import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className={`container text-${props.textCol} text-center mt-5 fs-1 mb-5`}
      >
        Text analyzer is an utility where you can manipulate your text.
      </div>
      <div
        className="text-center"
        style={{
          textAlign: "center",
        }}
      >
        <div className={`row ms-5 me-5`}>
          {/* Column 1 */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <div
                className={`card-body text-${props.textCol} bg-${props.mode}`}
              >
                <h5 className="card-title">Free to use</h5>
                <p className="card-text fst-italic">
                  Open to everyone on the web
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <div
                className={`card-body text-${props.textCol} bg-${props.mode}`}
              >
                <h5 className="card-title">Analyze your text</h5>
                <p className="card-text fst-italic">
                  Convert your text to uppercase, lowercase, copy text and
                  remove extra spaces from your text
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <div
                className={`card-body text-${props.textCol} bg-${props.mode}`}
              >
                <h5 className="card-title">Browser Compatible</h5>
                <p className="card-text fst-italic">
                  Can be translated effectively via a any browser or operating
                  system, such that it can be accessed by and is fully
                  functional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
