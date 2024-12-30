import React from 'react'

const Resistration = ({InputType,InpuPlaceholder,InputId,InputName,labelInput,className}) => {
  return (
    <>
      <div className="container">
        <div>
          <div className="pl-6">
            <label htmlFor={labelInput}>{labelInput}</label>
          </div>
          <div className="flex items-center justify-center mt-1">
            <form>
              <input
                className={className}
                type={InputType}
                placeholder={InpuPlaceholder}
                id={InputId}
                name={InputName}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resistration
