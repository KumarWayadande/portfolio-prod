import ToolDate from "./ToolDate";
import ToolInformation from "./ToolInformation";
import ToolInformationContainer from "./ToolInformationContainer";
import ToolsContainer from "./ToolsContainer";

const Tool = (prop) => {
  return (
    <ToolsContainer>
      <ToolDate toolDate={prop.toolDate} />
      <ToolInformationContainer>
        {prop.tools.map((item, index) => {
          return (
            <ToolInformation
              key={index}
              toolName={item.toolName}
              toolDescription={item.toolDescription}
            />
          );
        })}
      </ToolInformationContainer>
    </ToolsContainer>
  );
};

export default Tool;
