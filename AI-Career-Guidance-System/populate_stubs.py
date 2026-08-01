import os
import glob

def populate_react_component(filepath, filename):
    component_name = filename.replace('.jsx', '')
    content = f"""import React from 'react';

const {component_name} = () => {{
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{component_name}</h1>
      <p className="text-gray-500">This page/component is under construction.</p>
    </div>
  );
}};

export default {component_name};
"""
    with open(filepath, 'w') as f:
        f.write(content)

def populate_python_api(filepath, filename):
    router_name = filename.replace('.py', '')
    content = f"""from fastapi import APIRouter

router = APIRouter(prefix="/{router_name}", tags=["{router_name.capitalize()}"])

@router.get("/")
async def get_{router_name}():
    return {{"message": "{router_name} endpoint"}}
"""
    with open(filepath, 'w') as f:
        f.write(content)

def populate_python_schema(filepath, filename):
    schema_name = filename.replace('_schema.py', '').capitalize()
    content = f"""from pydantic import BaseModel
from typing import Optional

class {schema_name}Schema(BaseModel):
    id: Optional[str] = None
"""
    with open(filepath, 'w') as f:
        f.write(content)

def populate_python_model(filepath, filename):
    model_name = filename.replace('.py', '').capitalize()
    content = f"""# Example database model for {model_name}
# Typically you would use Beanie, Motor, or SQLAlchemy here.

class {model_name}:
    pass
"""
    with open(filepath, 'w') as f:
        f.write(content)
        
def populate_python_service(filepath, filename):
    service_name = filename.replace('.py', '').replace('_', ' ').title().replace(' ', '')
    content = f"""# Business logic for {service_name}

class {service_name}:
    @staticmethod
    async def process():
        pass
"""
    with open(filepath, 'w') as f:
        f.write(content)

def main():
    base_dir = r"c:\Users\Shreya Kapse\Desktop\my first project 1\AI-Career-Guidance-System"
    
    # Walk frontend
    for root, dirs, files in os.walk(os.path.join(base_dir, 'frontend', 'src')):
        for file in files:
            filepath = os.path.join(root, file)
            if file.endswith('.jsx') and os.path.getsize(filepath) == 0:
                populate_react_component(filepath, file)
            elif file.endswith('.css') and os.path.getsize(filepath) == 0:
                with open(filepath, 'w') as f:
                    f.write(f"/* Styles for {file} */\n")
            elif file.endswith('.js') and os.path.getsize(filepath) == 0:
                 with open(filepath, 'w') as f:
                    f.write(f"// Utility/Service file {file}\n")
                
    # Walk backend
    for root, dirs, files in os.walk(os.path.join(base_dir, 'backend', 'app')):
        for file in files:
            filepath = os.path.join(root, file)
            if file.endswith('.py') and os.path.getsize(filepath) == 0:
                if 'api' in root:
                    populate_python_api(filepath, file)
                elif 'schemas' in root:
                    populate_python_schema(filepath, file)
                elif 'models' in root:
                    populate_python_model(filepath, file)
                elif 'services' in root:
                    populate_python_service(filepath, file)
                else:
                    with open(filepath, 'w') as f:
                        f.write(f"# Boilerplate for {file}\n")

if __name__ == "__main__":
    main()
