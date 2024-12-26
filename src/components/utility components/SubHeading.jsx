const SubHeading = (prop) => {
    return <p className="sub-text my-10 text-gray-500 text-lg dark:text-gray-400">
      {prop.children}
    </p>
}

export default SubHeading;