# Selecting the Best Laptop for Data Science and AI Students

## Multi-Criteria Decision Making (MCDM) Analysis using SuperDecisions

![MCDM Model](https://img.shields.io/badge/MCDM-AHP%20Model-blue)
![Status](https://img.shields.io/badge/Status-Completed-success)
![Course](https://img.shields.io/badge/Course-Business%20Intelligence%20and%20Analytics-orange)

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Methodology](#methodology)
- [Criteria Selection](#criteria-selection)
- [Alternatives](#alternatives)
- [Implementation & Results](#implementation--results)
- [Sensitivity Analysis](#sensitivity-analysis)
- [Conclusion](#conclusion)
- [References](#references)

## 🔍 Project Overview

This project applies Multi-Criteria Decision Making (MCDM) techniques to systematically evaluate and select the optimal laptop for Data Science and Artificial Intelligence students. Using the Analytic Hierarchy Process (AHP) implemented through SuperDecisions software, the analysis evaluates six distinct laptop alternatives against a comprehensive set of criteria relevant to the specialized computing needs of DS & AI work.

The selection process balances technical performance requirements with practical considerations like portability, display quality, connectivity, and cost to arrive at a data-driven recommendation.

## 🎯 Objectives

- To create a systematic approach for evaluating laptop alternatives based on relevant criteria
- To implement a decision model using SuperDecisions software
- To analyze and justify the final selection through appropriate weight distribution
- To test the robustness of the model through sensitivity analysis
- To provide a justified recommendation for the optimal laptop choice

## 🔄 Methodology

The project follows the Analytic Hierarchy Process (AHP) methodology, which structures the decision problem in a hierarchical manner:

1. **Problem Structuring**: Define the goal, criteria, sub-criteria, and alternatives
2. **Pairwise Comparisons**: Compare elements at each level of the hierarchy
3. **Priority Derivation**: Calculate weights for criteria and alternatives
4. **Consistency Verification**: Ensure judgments are logically consistent
5. **Synthesis**: Combine criterion-specific evaluations to obtain overall rankings
6. **Sensitivity Analysis**: Test how changes in weights affect the outcome

The entire process was implemented using SuperDecisions software, which provides a user-friendly interface for AHP modeling and calculation.

## 📊 Criteria Selection

Five main criteria with associated sub-criteria were identified as crucial for evaluating laptops for Data Science and AI tasks:

### 1. Performance Capabilities (~40%)
- **Processor (CPU)**: Multi-core processing power for data analysis
- **Graphics Processing (GPU)**: Acceleration capabilities for deep learning
- **Memory (RAM)**: Capacity for handling large datasets
- **Storage**: Speed and capacity for data access and storage

### 2. Cost Considerations (~25%)
- **Purchase Price**: Initial investment cost
- **Value for Money**: Long-term value relative to specifications

### 3. Display Quality (~15%)
- **Resolution & Size**: Screen real estate for productivity
- **Color Accuracy**: Precision for data visualization

### 4. Portability Factors (~13%)
- **Weight & Form Factor**: Physical mobility
- **Battery Life**: Usage time away from power outlets

### 5. Connectivity & Expandability (~7%)
- **Port Selection**: Options for external connections
- **Wireless Capabilities**: Network connectivity options

## 💻 Alternatives

Six laptop alternatives were evaluated, each representing different approaches to meeting the needs of DS & AI students:

1. **Lenovo ThinkPad P16** (Workstation Performance)
   - Intel Core i9-12950HX, NVIDIA RTX A5500, 64GB RAM, 2TB SSD
   - Strengths: Exceptional computing power, maximum RAM, professional GPU
   - Weaknesses: Heavy, expensive, below-average battery life

2. **ASUS ROG Zephyrus G14** (Gaming Performance)
   - AMD Ryzen 9 6900HS, NVIDIA RTX 4060, 16GB RAM, 1TB SSD
   - Strengths: Excellent performance-to-portability ratio, strong GPU
   - Weaknesses: Limited RAM in base configuration, smaller screen

3. **MacBook Pro 16"** (Apple Ecosystem)
   - Apple M2 Pro, 32GB unified memory, 1TB SSD
   - Strengths: Exceptional battery life, outstanding display, optimized software
   - Weaknesses: Limited compatibility with some AI tools, non-upgradable

4. **Dell XPS 15** (Premium Ultrabook)
   - Intel Core i7-13700H, NVIDIA RTX 4050, 32GB RAM, 1TB SSD
   - Strengths: Premium build, excellent display, good performance-to-portability
   - Weaknesses: Limited ports, modest GPU, thermal constraints

5. **Microsoft Surface Laptop Studio** (Versatile 2-in-1)
   - Intel Core i7-11370H, NVIDIA RTX 3050 Ti, 32GB RAM, 1TB SSD
   - Strengths: Versatile form factor, touchscreen, good build quality
   - Weaknesses: Limited GPU, older processor, relatively expensive

6. **Acer Swift 3** (Budget Option)
   - Intel Core i5-1240P, Intel Iris Xe Graphics, 16GB RAM, 512GB SSD
   - Strengths: Most affordable, lightest, good battery life
   - Weaknesses: Limited graphics, insufficient RAM for large datasets

## 🛠️ Implementation & Results

The decision model was implemented in SuperDecisions with the following steps:

1. Creation of the hierarchy structure with clusters and nodes
2. Definition of relationships between elements
3. Performing pairwise comparisons for all criteria and sub-criteria
4. Evaluating alternatives against each criterion
5. Synthesizing the results to obtain final rankings

### Final Rankings:

| Rank | Alternative | Normal Score | Ideal Score |
|------|-------------|--------------|-------------|
| 1 | Lenovo ThinkPad P16 | 0.2331 | 1.0000 |
| 2 | ASUS ROG Zephyrus G14 | 0.1811 | 0.7770 |
| 3 | MacBook Pro 16" | 0.1783 | 0.7649 |
| 4 | Microsoft Surface Laptop Studio | 0.1476 | 0.6330 |
| 5 | Dell XPS 15 | 0.1447 | 0.6210 |
| 6 | Acer Swift 3 | 0.1152 | 0.4944 |

The Lenovo ThinkPad P16 emerged as the clear winner, primarily due to its exceptional performance capabilities, which were heavily weighted in the model. Its workstation-class specifications make it particularly well-suited for intensive AI and data science workloads.

## 🔄 Sensitivity Analysis

Sensitivity analysis tested how changes in criteria weights would affect the final rankings:

- The ThinkPad P16 remains the optimal choice as long as Performance Capabilities weight is above 35%
- If Cost Considerations weight increases beyond 40%, the ASUS ROG would become the preferred option
- If Portability weight increases beyond 25%, the Acer Swift 3 would move up significantly in the rankings

This analysis confirms that the model is robust for students who prioritize performance for data science and AI tasks, while showing how different priorities might lead to different optimal choices.

## 🏁 Conclusion

The multi-criteria decision analysis demonstrates that the Lenovo ThinkPad P16 is the optimal choice for a Data Science and AI student, primarily due to its exceptional processing power, graphics capabilities, and memory capacity. These performance features are crucial for handling complex machine learning models, large datasets, and intensive computational tasks.

However, the analysis also highlights that different students may have varying priorities:

- Students with budget constraints may find the ASUS ROG Zephyrus G14 offers better value while still providing strong performance
- Those requiring maximum portability may prefer the Acer Swift 3 or ASUS ROG Zephyrus G14
- Students working within the Apple ecosystem may benefit from the MacBook Pro 16"

The decision-making framework provides a strong methodology for students to select the most suitable laptop based on their individual priorities and requirements.

## 📚 References

- Analytical Hierarchy Process (AHP) in Multi-Criteria Decision Making. (2023). SuperDecisions Software Documentation.
- Dell. (n.d.). Dell XPS 15 Technical Specifications.
- Esichaikul, V. (2025). Business Intelligence and Analytics (AT82.04) Course Materials. Asian Institute of Technology.
- Lenovo. (n.d.). ThinkPad P16 Mobile Workstation Specifications.
- Apple. (n.d.). MacBook Pro Technical Specifications.

---

Developed by Arya Bhavesh Shah (st125462)  
Asian Institute of Technology | Business Intelligence and Analytics  
March 2025
